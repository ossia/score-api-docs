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
"_clip_mode_8hpp_source.html",
"_expression_editor_widget_8hpp_source.html",
"_minuit_protocol_settings_widget_8hpp_source.html",
"_scenario_creation_state_8hpp_source.html",
"_visitor_interface_8hpp_source.html",
"class_base_scenario_presenter.html#ac0bb611061cbeefd53d3a6e32070de23",
"class_curve_1_1_model.html#a0c5a09981c9f4a4d0862df3c320417a2",
"class_curve_1_1_tool_palette.html#ab806e8e872b6431c77dec9a091f3ea43",
"class_data_stream_writer.html#a7287534d33aca07d621a15abe9baa4e1",
"class_device_1_1_address_accessor_edit_widget.html#af4e43ef05267e612cde179c583ccb2b1",
"class_execution_1_1_document_plugin.html#a943049e69bd228a948b99a3c73ed37a1",
"class_execution_1_1_transport_interface_list.html",
"class_explorer_1_1_device_explorer_filter_proxy_model.html#acd3dd944dbfc7b62e0d882d6c802cd5e",
"class_gfx_1_1_filter_1_1_model.html#a2c4d4406cdcb8e00a711f05cd1e130a6",
"class_gfx_1_1kinect2__decoder.html#af90612f9e25a27542220a2488c4a1799",
"class_interp_state_1_1_view.html#a6b8dfd13974942ac1826e23fe76cd688",
"class_j_s_o_n_reader.html#ab99c0078d9ec8975e6e8f8497cccdb91",
"class_library_1_1_process_widget.html#a2f6218a4dc02634a87b170d1392c6eb8",
"class_media_1_1_settings_1_1_model.html#a831c000f8768512055314f7805580aa1",
"class_midi_1_1_replace_notes.html#afc065ab8a0ac5b09413b0e6c28fc5451",
"class_opaque_string.html#a414c6bbeaeaa47a5e76dc53ee04e3b56",
"class_process_1_1_cable.html#a49052fb96990263d1ae3f85f961bcde9",
"class_process_1_1_layer_presenter.html#a569562954e1aeab337af9e50544d5567",
"class_process_1_1_process_model.html#a9d68041553afe98c0d8e7eba65815d0a",
"class_protocols_1_1_o_s_c_query_device.html#afddf29a67171983c4c0af2cbb0299dea",
"class_scenario_1_1_base_element_context.html#a965ea138a85f5e5b5abd4ca53ab6782a",
"class_scenario_1_1_command_1_1_create_interpolation_from_states.html#a7e24be883c3f0b720a3b94999da1ac67",
"class_scenario_1_1_command_1_1_move_event_on_creation_meta.html#adc12249a8322424984f32d0e3dfdc6cc",
"class_scenario_1_1_command_1_1_split_whole_sync.html#ad35410f53858580c9289f0ed9f8963fe",
"class_scenario_1_1_enable_when_scenario_interface_instant_object.html",
"class_scenario_1_1_interval_header.html#a66e12451ec601dca074a3ff61cc89939",
"class_scenario_1_1_item_type.html#ae2f99877ab3f1f28c0bd48aedacd172ea6b18326c69b22898ce7f3cc48ea12927",
"class_scenario_1_1_object_item_model.html",
"class_scenario_1_1_scenario_interface.html#a6e7f50423ab9800f20ac7f014bbac581",
"class_scenario_1_1_state_model.html",
"class_scenario_1_1_time_sync_summary_widget.html",
"class_spline_1_1_curve_item.html#a8eb3344a94cd3586d53b693d98f3b8de",
"class_token_request_value_type.html#afa8713564f5e63de648a59ce529e6441",
"class_web_socket_view.html#a91316d6cbefb0c547549374404852f66",
"classscore_1_1_command_stack.html#a55caf9aaee02cb1fb12cc66340bcc77d",
"classscore_1_1_entity_list.html#acd345764db0145e329b66c16bb264c6c",
"classscore_1_1_log_messages_item_model.html#a478095a401315ba38e116b273bf636ee",
"classscore_1_1_q_graphics_knob.html#a866b3f3cedde51fa8b3fcdcd1dee1087",
"classscore_1_1_settings_view.html#a1a6fccdccd4a60dbc42d0213b6eaa165",
"classscore_1_1_zoom_item.html#a998ffb456ae1a59d3340adc1216c638d",
"classvst3_1_1param__queue.html#a0c44cf480ccebd6b45fc2f5b712c8365",
"namespacemembers_func.html",
"struct_color_node.html#a30e3423b3055dabdcf200033bf683754",
"struct_control_1_1setup___impl1.html#a2c6ed1774ecbe6f94504b5445cacc10d",
"struct_engine_1_1score__to__ossia_1_1_curve_traits.html",
"struct_gfx_1_1_image.html#af50f7266c5ccaac2309d2405abe3b2a0",
"struct_j_s_o_n_reader_1_1assigner.html#a4a690a0d87f11702ae5c9d3d36fc1a86",
"struct_local_tree_1_1_set_property_wrapper.html",
"struct_midi_1_1_midi_style.html#a8e7ada2959061ca655f7926728a336ec",
"struct_nodes_1_1_pulse_to_note_1_1_node_1_1_state.html",
"struct_process_1_1_magnetic_info.html#a8150ac3d0a59d9a38182095611e8caa3",
"struct_protocols_1_1_settings_1_1_midi_a_p_i.html",
"struct_recording_1_1_record_automation_creation_visitor.html#a08b8ab3af6b67e8873b4729f075eb86d",
"struct_scenario_1_1_command_1_1_message_pairs.html#aefe07c0b9d9fdb25401ec426ebbf0c91",
"struct_scenario_1_1_state_overlays.html#af072db8932a76c1eb6186f12e3d2f00a",
"struct_std_variant_j_s_o_n_deserializer.html#acd4c95e96caad026719076720f416007",
"struct_variant_data_stream_deserializer.html#a621306b7287bdbfa4b4fdad38ede8978",
"structscore_1_1_application_components_data.html#a00eae689ef10fc5db1c07b0846fa936d",
"structscore_1_1_id_gen.html#a876e0e0ae51e08fbd4d7cb2f97a5917c",
"structscore_1_1_string_constants.html#ab0d13a9ba34c712a90f035e8c7fe52b3",
"structvst3_1_1_application_plugin.html#a314ea3c2b307e14c226b5dcdf3a25bb2"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';