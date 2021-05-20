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
"_clear_state_8hpp_source.html",
"_find_string_in_file_8hpp_source.html",
"_models.html#IdentificationObjects",
"_scenario_edition_settings_8hpp_source.html",
"_widget_8hpp_source.html",
"class_base_scenario_presenter.html#ad15d0e152d2b09e79ef274e676327066",
"class_curve_1_1_model.html#a392a9a4186dc3dcc379733d6a76cf0c5",
"class_curve_1_1_update_curve.html",
"class_data_stream_writer.html#a80428500db6269c75edd05d0bb8c281a",
"class_device_1_1_device_explorer_node.html",
"class_execution_1_1_event_component.html#ac99265d0ad161e0180f9c87f28b67420",
"class_explorer_1_1_address_edit_dialog.html#a110c79eb77de3b3bd810dd1972a2d51a",
"class_explorer_1_1_device_explorer_widget.html#a2392f606a0cc7f15fcc945ddb6675141",
"class_gfx_1_1_images_1_1_model.html#a169f7df6be6b12e4c6274ac8aa1eae91",
"class_gradient_1_1_process_model.html#a955628bd1444044498e6907b666c658a",
"class_j_s_1_1_executor_1_1js__node.html#a85003bb4933295888b153c7071daf86b",
"class_j_s_o_n_writer.html#a355b9004913878034ed80b60988b0fc8",
"class_local_tree_1_1_component.html#a11f2449659a3074cdfa0ca14b91b19a9",
"class_media_1_1_sound_1_1_process_model.html#af443386df78200acc92accc296863c06",
"class_mixer_1_1_mixer_panel.html",
"class_patternist_1_1_inspector_widget.html",
"class_process_1_1_default_header_delegate.html#a14d288c0639dd0ae75d4298e4c31187c",
"class_process_1_1_midi_outlet.html#a909ce5d0a258754ae9db222188c3835a",
"class_process_1_1_value_inlet.html#a469fbb3edc39a91b2572127dd57a21b0",
"class_ptr_container.html#a6a54f210f07188f1fc84d00410585cf9",
"class_scenario_1_1_click_on_end_state___transition.html",
"class_scenario_1_1_command_1_1_merge_events.html#a9f751bf73f532432e3a18d3e1aa308c7",
"class_scenario_1_1_comment_block_model.html#a55b29b8d72a02da7ce34c8ec47ab928d",
"class_scenario_1_1_event_model.html#a2f33e8d368c37cf7dd7ba1e18d936b00",
"class_scenario_1_1_interval_model.html#a07d3720e157bfe119e04b89ca329f2ae",
"class_scenario_1_1_layer_data.html#a5ca7e188bbeee07c8341e779dd6c47ee",
"class_scenario_1_1_object_menu_actions.html#a667dd72df3995cb5717d7ff3808f821b",
"class_scenario_1_1_scenario_presenter.html#a378a7855735da79d08de2b751baddef9",
"class_scenario_1_1_state_model.html#a9f3e1edaf4527f07dd955cc2f37f4d4d",
"class_scenario_1_1_time_sync_view.html#a506b975f6202c23b415ba50e3bcfc175",
"class_spline_1_1_curve_item.html#ae148f567a57e13e5c1da636dfdf71eab",
"class_transport_1_1_direct_transport.html#a6f2eb820625d61bae8c62c7b1aaa6051",
"class_video_1_1_camera_input.html#a9a01a250291b821b82c629eb30e9a02f",
"classscore_1_1_command_factory___qt_interface.html",
"classscore_1_1_entity_list.html#a0bebe847385e582f18a217566c68e5d4",
"classscore_1_1_interface_list.html#af781f00e3464cb0a61568100b7f4740d",
"classscore_1_1_q_graphics_h_s_v_chooser.html#a8aabb5b0e8bcfcdb6cdcf204e9d0ce7a",
"classscore_1_1_settings_delegate_presenter.html#a9e24ee56be37fb01d6036aa1903bf372",
"classscore_1_1_view.html#ac83a07deb2e570e6130bb01f5c6adee6",
"classvst3_1_1_model.html#afdcf45b0259149771778ab30e950025f",
"functions_func_w.html",
"score__plugin__fx_8hpp_source.html",
"struct_control_1_1_log_float_control.html#a299b449a9f356b5ed0f1f318c5994c60",
"struct_dataflow_1_1control__visitor.html#aa8baa16dec7d75f4deea228cd142c58d",
"struct_explorer_1_1_settings_1_1_device_log_level.html#af2c0672280b8aedfa8d1088f3a6a5580",
"struct_hierarchical_scenario_component_1_1_event_pair.html",
"struct_l_v2_1_1_host_context.html#a61d2919b8daae9bfed660a48f3214118",
"struct_media_1_1_sound_1_1_waveform_computer_impl_1_1_loop_wrapper.html#a100540fdb72e407e5835ad25992539a3",
"struct_nodes_1_1_gain_1_1_node.html#a0bb00d61911e143eebff333ec930c9ba",
"struct_process_1_1_context.html#a4363068d20d3716d38dc9918f636e21f",
"struct_protocols_1_1_minuit_specific_settings.html#a6f5cf61aeea82ab89aa291a557b14094",
"struct_recording_1_1_record_automation_creation_visitor.html#a363e7ae8c597af79f5f66bf5ae5aa143",
"struct_scenario_1_1_curve_creator.html#ae741a91406d9c9ae2aabea8368775328",
"struct_scenario_1_1_timenode_graph_connected_component.html#a0d11eec602c41e66d406a59c083aeb6b",
"struct_t_serializer_3_01_data_stream_00_01_string_key_3_01_u_01_4_01_4.html",
"struct_variant_j_s_o_n_deserializer.html#a86c20c48bc37e721bbbb72d6c6381b20",
"structscore_1_1_application_context.html",
"structscore_1_1_loaded_plugin_versions.html#a40ce3d7b35c734c516d6ccc2b472d6dd",
"structscore_1_1_string_constants.html#ab54e4cefa91c25e7ec01ce7fb3f4daf6",
"structvst3_1_1_application_plugin_1_1_scanning_process.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';