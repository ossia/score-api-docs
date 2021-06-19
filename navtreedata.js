/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "score", "index.html", [
    [ "Coding Style", "_coding_style.html", [
      [ "General philosophy", "_coding_style.html#Philosophy", null ],
      [ "Qt versus Modern C++", "_coding_style.html#Qt", null ],
      [ "Inheritance", "_coding_style.html#Inheritance", null ],
      [ "Passing values", "_coding_style.html#Values", null ],
      [ "Templates", "_coding_style.html#Templates", null ]
    ] ],
    [ "Commands", "_commands.html", [
      [ "Creating a command", "_commands.html#CreatingCommand", null ],
      [ "Launching commands", "_commands.html#LaunchingCommands", null ],
      [ "Special commands", "_commands.html#SpecialCommands", [
        [ "Command dispatchers", "_commands.html#Dispatchers", null ]
      ] ]
    ] ],
    [ "Contexts", "_contexts.html", null ],
    [ "Graphics plug-ins", "_gfx_plugins.html", [
      [ "Creating a custom node", "_gfx_plugins.html#CustomNode", null ],
      [ "Shader conventions", "_gfx_plugins.html#ShaderConventions", null ],
      [ "Video decoders", "_gfx_plugins.html#VideoDecoders", null ]
    ] ],
    [ "Data models", "_models.html", [
      [ "Organization", "_models.html#Organization", null ],
      [ "Identification of objects", "_models.html#IdentificationObjects", [
        [ "Identifiers", "_models.html#Identifiers", null ],
        [ "Paths", "_models.html#Paths", null ]
      ] ],
      [ "Creating models", "_models.html#CreatingModels", null ],
      [ "Relationship to Qt's item models", "_models.html#ItemModel", null ],
      [ "Tree models for simple objects", "_models.html#SimpleObjectsModel", null ]
    ] ],
    [ "Model-View-Presenter separation", "_model_view_presenter.html", null ],
    [ "Plug-ins, factories and interfaces", "_plugins_factories_and_interfaces.html", [
      [ "Anatomy of a plug-in", "_plugins_factories_and_interfaces.html#Anatomy", null ],
      [ "Adding a new component", "_plugins_factories_and_interfaces.html#NewClass", null ],
      [ "Declaring a new interface", "_plugins_factories_and_interfaces.html#NewInterface", null ],
      [ "Add-on manager", "_plugins_factories_and_interfaces.html#AddonManager", null ]
    ] ],
    [ "Useful score interfaces", "_score_interfaces.html", null ],
    [ "Serialization", "_serialization.html", [
      [ "Generalities on serialization", "_serialization.html#GenSer", null ],
      [ "DataStream serialization", "_serialization.html#DataStreamSer", null ],
      [ "JSON serialization", "_serialization.html#JSONObjSer", [
        [ "For deserializing", "_serialization.html#ObjDeser", [
          [ "In DataStream", "_serialization.html#DSObjDeser", null ],
          [ "In JSON", "_serialization.html#JSObjDeser", null ]
        ] ],
        [ "Serialization of polymorphic types", "_serialization.html#PolySer", null ],
        [ "Serialization examples", "_serialization.html#SerExamples", null ]
      ] ]
    ] ],
    [ "State Machines", "_state_machines.html", null ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
".html",
"_clear_interval_8hpp_source.html",
"_factory_family___qt_interface_8hpp_source.html",
"_minuit_protocol_factory_8hpp_source.html",
"_scenario_copy_8hpp_source.html",
"_vertical_extent_8hpp_source.html",
"class_automation_1_1_state_inspector_factory.html",
"class_curve_1_1_edition_settings.html#a38cf9c7d6a7fc4bd62e3c880b69a113e",
"class_curve_1_1_smart_tool.html",
"class_data_stream_writer.html#a287962f282d36f42a0caeb90f3f5d74a",
"class_dataflow_1_1_port_item.html#a56270a74dab387649b8c5dfcf42c642f",
"class_execution_1_1_clock_factory.html#a0b3097c28bd0f29bb18aa3b2df1e3280",
"class_execution_1_1_state_component_base.html#ab5103dc4e1c0d2d5e032417ddc4e12b3",
"class_explorer_1_1_device_explorer_model.html#a23d8dfae1d7debd83bb02a4c4bc28cca",
"class_faust_d_s_p_1_1_fx.html#aa2b0488fa9543f6a68f4bfc9911b8ccd",
"class_gfx_1_1_video_1_1video__node.html#ab0d8fe7af6a730ef793ceef8351c4d8d",
"class_identified_object_abstract.html",
"class_j_s_o_n_reader.html#a4c88ccaa752abd7b635a35ce82a81fa6",
"class_j_s_o_n_writer.html#aea9b5dc1d4c18776be74b0e13636c3cd",
"class_mapping_1_1_process_model.html#a1e5e83fd757a327a61c8b1a3056c5969",
"class_midi_1_1_add_note.html#acb5b968f6eb30240e0b1c9efa56f3b59",
"class_nodal_1_1_nodal_executor_base.html#a2cb33d0f86f5a2497a3d61a089601363",
"class_pd_1_1_process_model.html#a94e2e02cdeb5f587d409326a119fc630",
"class_process_1_1_graphics_shape_item.html#a3b3fe6f716a1cab236560e87b137c5e4",
"class_process_1_1_port_factory_list.html",
"class_protocols_1_1_joystick_protocol_settings_widget.html#a5d5b765246cc2dae89a98171a29cba1c",
"class_remote_control_1_1_document_plugin.html#a997ef81f45032c1469152263d815e63e",
"class_scenario_1_1_command_1_1_change_element_label.html#a52d4e8b175e039b42a9965e199623138",
"class_scenario_1_1_command_1_1_move_process.html",
"class_scenario_1_1_cross_overlay.html#a10f94131b8d7b61164156b0c35012714",
"class_scenario_1_1_expression_menu.html#a3d75046f274ed367e3ec2ab8ce277f4d",
"class_scenario_1_1_interval_model.html#af1d850ab6d4d660ed79237ce7b26fd5c",
"class_scenario_1_1_message_list_proxy.html#aeead939d0531db7467d75860d0acdc3d",
"class_scenario_1_1_resize_slot_state.html#a7f640d57c54285dac36eb30342ee9739",
"class_scenario_1_1_selection_state.html",
"class_scenario_1_1_temporal_interval_presenter.html#a4179967ad0525c2e46768f7b5ea8719e",
"class_scenario_1_1_z_pos.html#a740da8e67b5a23f52fa30711c5f51d06a86d368deae88c199be3f7e71e113fad6",
"class_state_1_1_char_value_widget.html#ab393cfdcf819b4da34473b35b467c657",
"class_tree_node_3_01_state_1_1_expr_data_01_4.html#a6136d16e0b592edb485fa51aa57503e4",
"classossia_1_1nodes_1_1audio__metronome.html#a0c7bf874afe37d6060ee5d6d1f6c7ad4",
"classscore_1_1_document.html#a7839b0d8fb31b19cd9948b0a5dbd7b07",
"classscore_1_1_g_u_i_application_plugin.html#ab9b7f92447cd8f8e62856f3ca5159890",
"classscore_1_1_model_metadata.html#a85564cbc0da9052277447917f867b018",
"classscore_1_1_q_graphics_selectable_pixmap_toggle.html#a0bad4429530a42cb2bca705fea0dfc76",
"classscore_1_1_skin.html#ad57d66c9c62e3180b0c5a68a87b086e9",
"classscore_1_1gfx_1_1_node.html#abe3e5324b8df85751b01d0d02fbe49dd",
"classvst3_1_1_create_control.html#a97f2e5cbcf955d565e0690148ce4b449",
"classvst_1_1vst__node__base.html#ad3cfe3ed788c86ae5fcf95829d03b5a5",
"score-plugin-transport_2_transport_2_application_plugin_8hpp_source.html",
"struct_control_1_1_int_slider.html#af0079599ac6a9bb9bd4f5c91f8adb8fa",
"struct_dataflow_1_1_value_inlet_factory.html#adeab2870351efefc93527f9d6e759b5b",
"struct_execution_1_1_transaction.html#a84d5a7e84c31542b426268fbc87adbea",
"struct_iterator.html#a008a6bbd0714953e20b1ee968e79941f",
"struct_l_v2_1_1on__finish.html#a426551764589cdedf9b2504ec3936b57",
"struct_media_1_1_sound_1_1_waveform_request.html#afbd67142f984b68d3939bf5d0b4eba73",
"struct_nodes_1_1_math_generator_1_1_node_1_1_state.html#a8e211272c83bc7c6f78140a9f6c2238a",
"struct_process_1_1_state_node_values.html#ad62f1b83e2cd614eb4f4dd04dac2a52a",
"struct_q_meta_type_id_3_01_lock_mode_01_4.html#a5d959938570da4c3f0bf0d41ddf52e0daf7e54de420a4da4af720fb919049332c",
"struct_remote_control_1_1_receiver.html#af657b2308dc881724d9de068a52bdd1c",
"struct_scenario_1_1_magnetic_states.html#a205681e720e13901ef2d50ae77d0bf47",
"struct_state_1_1_domain.html#a0f9f01cd833a0dd44e6893cb6677c7a9",
"struct_time_val.html#a18729fdfb276bfd00a23e47129ab6563",
"structscore_1_1_addon.html#ab673b0b100e90a1dc4c8875c02ffe6f4",
"structscore_1_1_g_u_i_elements.html#ab1846cd83b17d8d1d39b9ac120d5b8b8",
"structscore_1_1_string_constants.html#a9e79cdc0739dd79b6f695f959ca43982",
"structscore_1_1gfx_1_1_r_g_b0_decoder.html",
"structscore_1_1uuids_1_1uuid.html#a9a40c5560dec2076349dc1b1d32c4b59"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';